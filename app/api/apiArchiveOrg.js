import jQuery  from 'jquery';

const ARCHIVEORG_API_BASE_URL = 'http://archive.org/advancedsearch.php?';

const PARAMS = {
};

export default {
    getBooks: function(type) {

      let requestUrl = `${ARCHIVEORG_API_BASE_URL}`;
      switch (type) {
          case 'Galaxy':
              requestUrl += 'q=-title:"2nd Series"collection%3A"galaxymagazine"&fl%5B%5D=collection&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=volume&sort%5B%5D=identifierSorter+asc&rows=400&page=1&output=json';
              break;
          case 'Galaxy 2nd Series':
              requestUrl += 'q=title:"2nd Series"collection%3A"galaxymagazine"&fl%5B%5D=collection&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=volume&sort%5B%5D=identifierSorter+asc&rows=400&page=1&output=json';
              break;
          case 'Galaxy Novels':
              requestUrl += 'q=collection:"galaxynovels"&fl%5B%5D=collection&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=volume&sort%5B%5D=titleSorter+asc&rows=400&page=1&output=json';
              break;
          case 'Heavy Metal':
              requestUrl += 'q=collection:"heavy-metal-magazine"&fl%5B%5D=collection&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=volume&sort%5B%5D=identifierSorter+asc&rows=400&page=1&output=json';
              break;
          case 'Vampirella':
              requestUrl += 'q=collection:"warren-vampirella"&fl%5B%5D=collection&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=volume&sort%5B%5D=identifierSorter+asc&rows=400&page=1&output=json';
              break;
          case '1984':
              requestUrl += 'q=collection:"warren-1984-magazine"&fl%5B%5D=collection&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=volume&sort%5B%5D=identifierSorter+asc&rows=400&page=1&output=json';
              break;
          case 'all':
              break;
      }

      return $.ajax({
          url: requestUrl,
          dataType: 'jsonp'
        }).then(data => data.response);
    }
}
