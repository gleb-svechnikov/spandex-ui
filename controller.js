
angular.module('app',[]).controller('controller', function($scope){
  $scope.items = [
    { name: 'W3Catalog', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg',
      badge: 'Inactive'
    },
    { 
      name: 'Lycos',
      logo: 'http://vignette3.wikia.nocookie.net/logopedia/images/b/bb/Lycos_logo.png/revision/latest?cb=20150216074212'
    },
    {
      name: 'Yahoo',
      logo: 'http://img4.wikia.nocookie.net/__cb20130808151321/logopedia/images/c/c9/Yahoo!_Favicon.svg'
    },
    {
      name: 'Yandex',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Yandex_logo_en.svg'
    },
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png'
    },
    {
      name: 'Ask',
      logo: 'http://about.ask.com/wp-content/uploads/2013/04/Ask-Logo-Medium.jpg'
    },
    {
      name: 'Baidu',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Baidu.svg/1280px-Baidu.svg.png'
    },
    {
      name: 'Aol',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/AOL_logo.svg'
    },
    {
      name: 'A9',
      logo: 'http://library.corporate-ir.net/library/17/176/176060/mediaitems/108/A9_logo_RGB.jpg'
    },
    {
      name: 'DuckDuckGo',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/55/DuckDuckGo_Logo_%28mid_2014%29.svg'
    },
    {
      name: 'Bing',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Bing_logo_%282013%29.svg'
    },
    {
      name: 'TinEye',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Tineye_Logo.svg'
    }
  ];
  $scope.collapsed = true;
    
});
