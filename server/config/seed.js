/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Artist from '../api/artists/artist.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    },{
      provider: 'local',
      role: 'artist',
      name: 'Artisto',
      email: 'artist@example.com',
      password: 'artist'
    })
    .then((res) => {
      console.log('finished populating users');

      Artist.find({}).removeAsync()
        .then(() => {
          Artist.createAsync({
            name: {
                first: 'Doron',
                middle: '',
                last: 'Segal'
            },
            website: 'http://www.segaldoron.com',
            user: res[2]._id
          }, {
            name: {
                first: 'John',
                middle: '',
                last: 'Smith'
            },
            website: 'http://www.johnsmith.com'
          })
          .then((artistResult) => {
            console.log('finished populating artists');
            User.update({'_id': res[2]._id},{ 'artist': artistResult[0]._id}).then((complete) => {
              console.log('user update.');
              console.log(complete);
            });
          });
        });
    });
  });
