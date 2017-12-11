
angular.module('app',[]).controller('controller', function($scope){
  $scope.items = [
    { name: 'W3Catalog',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg',
      badge: 'Inactive',
      popularity: 0
    },
    {
      name: 'Lycos',
      logo: 'http://vignette3.wikia.nocookie.net/logopedia/images/b/bb/Lycos_logo.png/revision/latest?cb=20150216074212',
      popularity: 0
    },
    {
      name: 'Yahoo',
      logo: 'http://img4.wikia.nocookie.net/__cb20130808151321/logopedia/images/c/c9/Yahoo!_Favicon.svg',
      popularity: 2
    },
    {
      name: 'Yandex',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Yandex_logo_en.svg',
      popularity: 6
    },
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png',
      popularity: 10
    },
    {
      name: 'Ask',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/AskLogoNew07.PNG',
      popularity: 1
    },
    {
      name: 'Baidu',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Baidu.svg/1280px-Baidu.svg.png',
      popularity: 9
    },
    {
      name: 'Aol',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/AOL_logo.svg',
      popularity: 2
    },
    {
      name: 'A9',
      logo: 'http://library.corporate-ir.net/library/17/176/176060/mediaitems/108/A9_logo_RGB.jpg',
      popularity: 3
    },
    {
      name: 'DuckDuckGo',
      logo: 'https://duckduckgo.com/assets/logo_social-media.png',
      popularity: 5
    },
    {
      name: 'Bing',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Bing_logo_%282013%29.svg',
      popularity: 4
    },
    {
      name: 'TinEye',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Tineye_Logo.svg',
      popularity: 7
    }
  ];
  $scope.collapsed = true;

});
