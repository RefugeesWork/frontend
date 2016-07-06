var vm = new Vue({
  el: '#app',
  data: {
    columns: ['title', 'country', 'city', 'time', 'description'],
    title_character_limit: 70,
    description_character_limit: 250,
    search: '',
    filterExpand: false,
    posts: [
      {
        type: 'offer',
        country: 'Germany',
        post_time: '29.06.16 17:20',
        area: 'Hamburg',
        time: '01.07.16',
        telephone: '0172 / 1209328',
        street: 'Andrianenweg 24',
        plz: '19239',
        author: 'Daniel Pabst',
        title: 'Ruby software developer',
        description: "We are looking for a Ruby software developer, who's proficient in the following: You eat Webservice APIs such as REST and SOAP for breakfast, You rate yourself as a highly experienced Ruby (not exclusively Rails) developer, You heard about Sinatra and it is more than a legendary singer to you, You like to represent data as JSON or XML, You don’t believe that ER-models are old school, but still kick ass in a more and more document-oriented database world, You’re thankful for Lucene as it is the engine which powers your Elasticsearch or Solr search servers JavaScript is nothing you fear, You are familiar with so-called modern development processes like Scrum, CI, TDD and the corresponding tools, our English is good enough to read, write and discuss tasks within an international team"
      },
      {
        type: 'offer',
        country: 'Germany',
        post_time: '29.06.16 13:45',
        area: 'Nordrhein-Westfalen',
        time: 'Sofort',
        author: 'Hadeel Almuzayan',
        title: 'B2 German language',
        description: 'Im looking for refugees interested to fill Ausbildung Positions in a Company we already cooperate with to help the refugees. Requirements: you need a B2 German Course, a work Permit, flexible to move, willing commit in 3 years contract. The Ausbildung is good pained around 1000 euro in a month, the age must be between 18-35 years old.'
      },
      {
        type: 'offer',
        country: 'Germany',
        post_time: '24.06.16 16:24',
        area: 'Berlin',
        time: '28.11.2015',
        author: 'Inas Hasan',
        title: 'Web Design / Development',
        description: 'Join us to build the interactive photo website SYRIA ON THE MOVE! SYRIA ON THE MOVE invites young Syrians (wherever they are) to upload and geo-tag photos on a world map. It aims to provide young Syrians the opportunity to share their perspectives and visions of their new homes with a broad audience, and to rebuild a virtual connection among Syrians who are geographically dispersed. In a participative process intercultural teams will develop a model website. This is where we need you! We want to collect new and creative ideas such as: - How could the website look like? - What would be important features? - With regard to the user’s involvement: what should be considered? Be part of it by bringing your ideas to life! Everyone is welcome - whatever you bring or you are interested in - coding, design or curiosity and engagement. Free Syrian food will be served. Find the Event on Facebook: https://www.facebook.com/events/773529899442353/'
      },
      {
        type: 'offer',
        country: 'Germany',
        post_time: '24.06.16 16:18',
        area: 'Berlin',
        time: 'September 2016',
        author: 'Jens Lauer',
        title: 'E-care / social counsellor',
        description: 'Ipso e-care – psycho-social counselling from refugees for refugees New training course in Berlin is now open for application: We are looking for interested people with a migration background to be trained as psycho-social counsellors'
      },
      {
        type: 'offer',
        country: 'Germany',
        post_time: '24.06.16 10:17',
        area: 'Berlin',
        time: 'flexible',
        author: 'Elena Stieben',
        title: 'IT, Marketing',
        description: 'Interested in joining us on our journey in developing a revolutionary travel planning product? Take a look at our exciting opportunities!'
      },
      {
        type: 'offer',
        country: 'Germany',
        post_time: '24.06.16 08:22',
        area: 'Berlin',
        time: 'Anytime',
        author: 'Daniel Pabst',
        title: 'Volunteer Work',
        description: 'I am renovating an old ship in Berlin / Schoeneweide (Schöneweide). We work Mo - Sat 10 - 6 pm. If you want to help - with skills or without let me know. Info@down-to-earth.de '
      },
      {
        type: 'offer',
        country: 'Germany',
        post_time: '23.06.16 20:04',
        area: 'Berlin',
        time: 'from July 2016',
        author: 'Somar Abdo',
        title: 'Business Development Management Europe',
        description: 'Business Development Manager for EU sales, Li-Ion batteries and charger'
      }
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
      var output = string
      if (string.length >= value) {
        output = string.substring(0, value)
        output = output.substr(0, Math.min(output.length, output.lastIndexOf(' ')))
        output += '...'
      }
      return output
    }
  }
})
