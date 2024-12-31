'use strict';

const fs = require('fs');
const path = require('path');
module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.bulkInsert('book', [
      {
        id: 19862,
        title: "Les sports à la mode",
        subjects: [
          "Sports"
        ],
        languages: [
          "fr"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 273,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15831,
        title: "The Scientific American Boy; Or, The Camp at Willow Clump Island",
        subjects: [
          "Camping",
          "Sports",
          "Woodwork"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 210,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1180,
        title: "The Sportsman: On Hunting, a Sportsman's Manual, Commonly Called Cynegeticus",
        subjects: [
          "Classical literature",
          "Sportsmanship -- Early works to 1800"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 199,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48983,
        title: "The Sports and Pastimes of the People of England: Including the Rural and Domestic Recreations, May Games, Mummeries, Shows, Processions, Pageants, and Pompous Spectacles from the Earliest Period to the Present Time",
        subjects: [
          "England -- Social life and customs",
          "Games -- England -- History",
          "Pageants -- England -- History",
          "Popular culture -- England",
          "Processions -- England -- History",
          "Sports -- England -- History"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 187,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47966,
        title: "Frank Armstrong at College",
        subjects: [
          "College stories",
          "Sports stories",
          "Yale University -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 181,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6879,
        title: "The Gold Bat",
        subjects: [
          "Boys -- Conduct of life -- Juvenile fiction",
          "Humorous stories, English",
          "Schools -- Juvenile fiction",
          "Sports -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 178,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47760,
        title: "Three Hundred Things a Bright Boy Can Do",
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 175,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42049,
        title: "Frank Merriwell's Champions; Or, All in the Game",
        subjects: [
          "Boxing stories",
          "Gambling -- Juvenile fiction",
          "Merriwell, Frank (Fictitious character) -- Juvenile fiction",
          "Sports stories"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 167,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 61032,
        title: "Die Starken: Ein Athleten-Roman",
        subjects: [
          "German fiction -- 20th century",
          "Love stories",
          "Sports stories"
        ],
        languages: [
          "de"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 156,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47023,
        title: "The Putnam Hall Champions; or, Bound to Win Out",
        subjects: [
          "Adventure and adventurers -- Juvenile fiction",
          "Military cadets -- Juvenile fiction",
          "Military education -- Juvenile fiction",
          "Mystery and detective stories",
          "New York (State) -- Juvenile fiction",
          "School sports -- Juvenile fiction",
          "Sports -- Corrupt practices -- Juvenile fiction",
          "Yacht racing -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 149,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10446,
        title: "The Green Flag, and Other Stories of War and Sport",
        subjects: [
          "Great Britain -- Social life and customs -- 19th century -- Fiction",
          "Sports stories, English",
          "War stories, English"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 146,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34100,
        title: "Lefty Locke, pitcher-manager",
        subjects: [
          "Baseball managers -- Juvenile fiction",
          "Baseball stories",
          "Swindlers and swindling -- Juvenile fiction",
          "Teamwork (Sports) -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 144,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47243,
        title: "The Sportswoman's Library, Vol. 2 of 2",
        subjects: [
          "Sports"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 144,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23776,
        title: "The School of Recreation (1684 edition): Or, The Gentlemans Tutor, to those Most Ingenious Exercises of Hunting, Racing, Hawking, Riding, Cock-fighting, Fowling, Fishing",
        subjects: [
          "Recreation -- Handbooks, manuals, etc.",
          "Sports"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 143,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38443,
        title: "The Croxley Master: A Great Tale Of The Prize Ring",
        subjects: [
          "Boxers (Sports) -- Fiction",
          "Boxing stories"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 129,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 60153,
        title: "Winter Sports in Switzerland",
        subjects: [
          "Switzerland -- Description and travel",
          "Winter resorts -- Switzerland",
          "Winter sports -- Switzerland"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 128,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5872,
        title: "Cashel Byron's Profession",
        subjects: [
          "Boxers (Sports) -- Fiction",
          "Boxing stories"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 63593,
        title: "Outing; Vol. XIII.; October, 1888 to March, 1889: An Illustrated Monthly Magazine of Recreation.",
        subjects: [
          "Outdoor recreation -- Periodicals",
          "Recreation -- Periodicals",
          "Sports -- Periodicals"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 124,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34728,
        title: "Betty Lee, Sophomore",
        subjects: [
          "High school students -- Juvenile fiction",
          "School sports -- Juvenile fiction",
          "Schools -- Juvenile fiction",
          "Tenth grade (Education) -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 121,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 59952,
        title: "Greek Athletic Sports and Festivals",
        subjects: [
          "Athletics -- Greece",
          "Festivals -- Greece",
          "Olympic games (Ancient)",
          "Sports -- Greece"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 119,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1160,
        title: "The Game",
        subjects: [
          "Boxers (Sports) -- Fiction",
          "Boxing stories"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 116,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42403,
        title: "The Eight-Oared Victors: A Story of College Water Sports",
        subjects: [
          "College sports -- Juvenile fiction",
          "Rowing -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19246,
        title: "The Young Pitcher",
        subjects: [
          "Baseball -- Fiction",
          "Baseball players -- Fiction",
          "College sports -- Fiction",
          "College students -- Fiction",
          "Universities and colleges -- Fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 109,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45689,
        title: "The Arrival of Jimpson, and Other Stories for Boys about Boys",
        subjects: [
          "Boys -- Conduct of life -- Juvenile fiction",
          "Children's stories",
          "Conduct of life -- Juvenile fiction",
          "Friendship -- Juvenile fiction",
          "Sports -- Juvenile fiction",
          "Students -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 106,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36057,
        title: "The Boy Grew Older",
        subjects: [
          "Fathers and sons -- Fiction",
          "Runaway wives -- Fiction",
          "Sportswriters -- Fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 105,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44026,
        title: "Riding for Ladies: With Hints on the Stable",
        subjects: [
          "Horsemanship",
          "Sidesaddle riding",
          "Women in horse sports"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 105,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40586,
        title: "Billie Bradley and Her Classmates; Or, The Secret of the Locked Tower",
        subjects: [
          "Boarding school students -- Juvenile fiction",
          "Boarding schools -- Juvenile fiction",
          "Competition -- Juvenile fiction",
          "Detective and mystery stories",
          "Humanitarianism -- Juvenile fiction",
          "Rescues -- Juvenile fiction",
          "Schools -- Juvenile fiction",
          "Winter sports -- Juvenile fiction"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 104,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 55948,
        title: "The Abysmal Brute",
        subjects: [
          "Boxers (Sports) -- Fiction",
          "Boxing stories"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 104,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8550,
        title: "T. Haviland Hicks, Senior",
        subjects: [
          "College sports -- Juvenile fiction",
          "College stories"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 97,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        id: 16316,
        title: "Outdoor Sports and Games",
        subjects: [
          "Games",
          "Outdoor life",
          "Sports"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 96,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 61792,
        title: "Olympic Victor Monuments and Greek Athletic Art",
        subjects: [
          "Olympics",
          "Sculpture, Greek",
          "Sports -- Greece"
        ],
        languages: [
          "en"
        ],
        copyright: false,
        media_type: "Text",
        download_count: 96,
        createdAt: new Date(),
        updatedAt: new Date(),
      }  
]
);
  },

  down: (queryInterface, Sequelize) =>{
    return queryInterface.bulkDelete('book',null, {} );
  }
};
