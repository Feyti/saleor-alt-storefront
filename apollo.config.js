module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "https://mhbvufznnx.us-east-1.awsapprunner.com/graphql/",
      headers: {
        // Authorization: "bearer Ql4I7RSxi6SnBJqliQ5DIWciE2W6N0",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJpYXQiOjE2NDkxODYyNzksIm93bmVyIjoic2FsZW9yIiwiZXhwIjoxNjUxNzc4Mjc5LCJ0b2tlbiI6IlhEeFRmWTh0dFNnUiIsImVtYWlsIjoibWljaGFlbEBnb2J6LmxpdmUiLCJ0eXBlIjoicmVmcmVzaCIsInVzZXJfaWQiOiJWWE5sY2pvNU9EVT0iLCJpc19zdGFmZiI6dHJ1ZSwiY3NyZlRva2VuIjoiYjdiM212MXNkb2ZMdzd3SWxCUmE1Q3JCOTc3T0JOY25Ib0cydnJ3c05GaUY2ZlRYZUNaMUlvc0VEY0Y1UmkyeSJ9.lPYWIF80uwXJT6qTnXM1LEox07Co_0WBTUvmAjFCc6VhXETe6XnMym7dhC1Ip26zTqz1I3QJndAJVt1yL9HkrURWfy_xHa35F_XVElI7zFXN2cfB5sPl053khoAa5bsKHFhWCN7eoEOOTCdpHPRrjUfGbuf1-Fuc0tC9_8-JZSsrMy8jKtAGdeOWfQA1696HuLXjb63j7VNRXlF__cdnJeXLOPPImqcijy4ibbcmJoc2SQo1aqOf1feNZraNmdnXRAXXt5LPllenGYvK2HxS1bvkPKQm7CNGRfOg4W4XVqY3PAc9IuvOyoQuy-D7U87wXPMeWAjtCOKvdwkX6BIaDQ",
      }, // local authority
      // TODO: add the headers for some real secure queries
      skipSSLValidation: true,
    },
  },
};
