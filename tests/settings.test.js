var expect = require('expect');
var axios = require('axios');
var Tconfig = require('./config/TestsConfig');
var defaultSettings = require('../server/api/data/settingsData').defaultSettings();
describe('Settings Api Test:', function () {
  var config = new Tconfig();

  var hostName = config.hostName;
  var urlQuery = config.instance;
 /* it('Should Get default settings', function (done) {
    axios.get(hostName + '/api/settings?' + urlQuery).then(function (res) {
      expect(res.data.settings).toEqual(defaultSettings);
      done();
    },function (err) {
      expect("true").toEqual("false");
      done();
      throw(err);
    });
  });
  it('Should Save Settings', function (done) {
    try{
      var settings = Object.assign({},defaultSettings);
      settings["email"] = "Arthur@King.com";
      axios.post(hostName + '/api/settings?' + urlQuery, {settings}).then(function (res) {
        axios.get(hostName + '/api/settings?' + urlQuery).then(function (res) {
          expect(res.data.settings).toEqual(settings);
          done();
        });
      });
    }catch  (err) {
      done();
      throw(err);
    };
  });

  it('Should Delete Settings', function (done) {
    axios.delete(hostName + '/api/settings?' + urlQuery).then(function (res) {
      expect(res.data.settings).toEqual(defaultSettings);
      done();
    }).catch(function (err) {
      expect("true").toEqual("false");
      done();
      throw(err);
    });
    done();
  });*/

  it('Should get unauthorized request for invalid instance', function (done) {
    var urlQuery = config.getInvalidInstance();
    axios.get(hostName + '/api/settings?' + urlQuery).then(function (res) {
      expect(res.status).toEqual(401);
      done();
    },function (err) {
      expect(err.response.status).toEqual(401);
      expect(err.response.data).toEqual('unauthorized');
      done();
    });
  });

  it('Should get unauthorized for not having owner permissions',function (done) {
    done();
  });

});

describe.skip('GDPR ', function () {
  it('Should Get unauthorised request', function (done) {
    done();
  });
  it('Should Get User data', function (done) {
    done();
  });
  it('Should Delete User data', function (done) {
    done();
  });
  it('Should confirm data deletion', function (done) {
    done();
  });
});
