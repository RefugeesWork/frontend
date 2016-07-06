var vm = new Vue({
  el: '#app',
  data: {
    columns: ['title', 'country', 'city', 'time', 'description'],
    title_character_limit: 70,
    description_character_limit: 140,
    search: '',
    filterExpand: false,
    posts: [
      { type: 'search', country: 'Germany', post_time: '29.06.16 17:20', area: 'Thirungia',              time: 'I can start from this moment', author: 'Molham',           title: 'Im refuge i can speak english and little deutch i want any kind of work', description: 'I search to find work any kind of work'},
      { type: 'offer',  country: 'Germany', post_time: '29.06.16 13:45', area: 'North Rhine-Westphalia', time: 'Sofort',                       author: 'Hadeel Almuzayan', title: 'B2 German language',                                                      description: 'Im looking for refugees interested to fill Ausbildung Positions in a Company we already cooperate with to help the refugees. Requirements: you need a B2 German Course, a work Permit, flexible to move, willing commit in 3 years contract. The Ausbildung is good pained around 1000 euro in a month, the age must be between 18-35 years old.'},
      { type: 'search', country: 'Austria', post_time: '24.06.16 16:24', area: 'anywhere',               time: 'Anytime',                      author: 'Inas Hasan',       title: 'A good job',                                                              description: 'I am looking for part or full time work in the restaurant or a cafe or supermarket or a factory'},
      { type: 'search', country: 'Austria', post_time: '24.06.16 16:18', area: 'anywhere',               time: 'Anytime',                      author: 'Evan Dino',        title: 'A job',                                                                   description: 'Any job in Vienna in a restaurant or bar or cafe or a factory '},
      { type: 'offer',  country: 'Germany', post_time: '24.06.16 10:17', area: 'Berlin',                 time: 'flexible',                     author: 'Elena Stieben',    title: 'IT, Marketing',                                                           description: 'Interested in joining us on our journey in developing a revolutionary travel planning product? Take a look at our exciting opportunities!'},
      { type: 'offer',  country: 'Germany', post_time: '24.06.16 08:22', area: 'Hamburg',                time: '01.07.16',                     author: 'Daniel Pabst',     title: 'Software Development',                                                    description: "We are looking for a Ruby software developer, who's proficient in the following: You eat Webservice APIs such as REST and SOAP for breakfast, You rate yourself as a highly experienced Ruby (not exclusively Rails) developer, You heard about Sinatra and it is more than a legendary singer to you, You like to represent data as JSON or XML, You don’t believe that ER-models are old school, but still kick ass in a more and more document-oriented database world, You’re thankful for Lucene as it is the engine which powers your Elasticsearch or Solr search servers JavaScript is nothing you fear, You are familiar with so-called modern development processes like Scrum, CI, TDD and the corresponding tools, our English is good enough to read, write and discuss tasks within an international team"},
      { type: 'offer',  country: 'Germany', post_time: '23.06.16 20:04', area: 'Berlin',                 time: 'from July 2016',               author: 'Somar Abdo',       title: 'Business Development Management Europe',                                  description: 'Business Development Manager for EU sales, Li-Ion batteries and chargers'}
    ]
  },
  methods: {
    expandPost: function () {
      console.log(this)
    },
    humanizeURL: function (url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    },
    filter: function (test) {
      // console.log(this.posts[0].title)
      console.log(this.search)
      this.search = test
    },
    expandFilter: function () {
      this.filterExpand = !this.filterExpand
    }
  },
  filters: {
    truncate: function (string, value) {
      var output = string.substring(0, value)
      if (string.length >= value) {
        output += '...'
      }
      return output
    }
  }
})
