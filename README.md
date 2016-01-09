# Image Search Abstraction Layer
A microservice where the user can get the image URLs, alt text and page urls for a set of images relating to a given search string,
It can also paginate through the responses by adding a ?offset=2 parameter to the URL and can get a list of the most recently submitted search strings.
###Example usage:
```sh
<%= baseUrl %>imagesearch/nba
<%= baseUrl %>imagesearch/nba?offset=2
<%= baseUrl %>latest/imagesearch/
```
###Example output of images queries:
```sh
     [
      {
      "url": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?transparent=true",
      "snippet": "NBA.comESPN.com Partner",
      "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhalJk_OkQImf3qbDMwjykUFmtqZJMATfSKpBhzMgIvKXj7VaJXhPFmzlx5g",
      "context": "http://espn.go.com/nba/"
      },
      {
      "url": "https://dff2h0hbfv6w4.cloudfront.net/images/backgrounds/nba.jpg",
      "snippet": "NBA Event Calendar - Stanza",
      "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLqNLMI8Wem009b4nw5IDuwWf0y3nxFOKMT8Dfqwm_CVjnN8ZGvfADm9Y",
      "context": "https://www.stanza.co/timeline/nba"
      },
      {
      "url": "http://z.cdn.turner.com/nba/nba/.element/img/4.0/global/logos/512x512/bg.white/svg/TOR.svg",
      "snippet": "0",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0G87HLtvLUEOW6ZkxM-01_x9HH0LFHDCiCkFly6QYAl76aAXhbaM-Nn5HQ",
      "context": "http://www.nba.com/"
      },
      {
      "url": "https://yt3.ggpht.com/-iykIxE6HFpM/AAAAAAAAAAI/AAAAAAAAAAA/qho7mLdsPLc/s900-c-k-no/photo.jpg",
      "snippet": "Skip navigation",
      "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjjD4YWfWGWGzfze19TrFGdUOtIEiJjE4QNqNKi-nqB0ySFWEKSap2GlZRzg",
      "context": "https://www.youtube.com/user/NBA"
      },
      {
      "url": "http://z.cdn.turner.com/nba/nba/.element/img/4.0/global/logos/512x512/bg.white/svg/ATL.svg",
      "snippet": "NBA.com",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8mpB36MEDIeg9fDBBUqyEkXALPyJSKC-H3dOyg48waVklvUQ2KR9W6ujLw",
      "context": "http://www.nba.com/"
      },
      {
      "url": "https://usatq.files.wordpress.com/2015/06/draftgrades.png?w=680&h=420&crop=1",
      "snippet": "2015 NBA draft tracker:",
      "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKOn5rof89kf_UOmbk1oWvZULsA0rypW3Cuw3tBOyh5DdOacMRItaM87s",
      "context": "http://sportswire.usatoday.com/category/nba/"
      },
      {
      "url": "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/NBA_Logo.jpg",
      "snippet": "Throughout NBA history",
      "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJLW4BFxaMCs0iec_5wknJrCaygH9YGW36VsielBacoW0x1fSTrwANnfs",
      "context": "http://www.trendingtoplists.com/top-25-nba-trademark-signature-moves"
      },
      {
      "url": "https://lh5.ggpht.com/Y9cG2XlxsaTUP1wGMHiOGjpDSGmcczHS3EABEN8s_ORvUk4n57Z_XQwuC0GAYX-O91A=w300",
      "snippet": "Cover art",
      "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiWj5NH8KIejlyWDAvgu0BopeTMoUB802hHvwHjDtaqknKszMayYC1cw",
      "context": "https://play.google.com/store/apps/details?id=com.nbadigital.gametimelite"
      },
      {
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/NBALogo.svg/451px-NBALogo.svg.png",
      "snippet": "NBALogo.svg",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLDqjWZanOn4pCc4awX94Kf-Wyt6CBvq_ZfMlqha4-w9oy6w-j-Xryc1x",
      "context": "https://en.wikipedia.org/wiki/National_Basketball_Association"
      },
      {
      "url": "http://sports.cbsimg.net/images/nba/photogallery/nba-fan-map.jpg",
      "snippet": "Conference realignment has",
      "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQw5j-vjhceWeUAARvqIoZf7JyD0LnhBvyBqhDiUXLI51g9Utzs3o3GjhZU",
      "context": "http://www.cbssports.com/mcc/blogs/entry/22748484/31749673"
      }
     ]
```
###Example output of the latest terms:
```sh
    [
      {
      "term": "romeo",
      "when": "2016-01-09T03:57:04.196Z"
      },
      {
      "term": "nba",
      "when": "2016-01-09T04:19:13.164Z"
      }
    ]
```
