let navMenuItems = [
    {text: 'About', href:'/about'},
    {text: 'Team', href:'/team'},
    {text: 'Work', href:'/work'},
    {text: 'News', href:'/news'}
  ];

let socialMediaLinks = [
    {text: 'Twitter', href:'https://twitter.com/powderhs'},
    {text: 'Facebook', href:'https://www.facebook.com/powderhousestudios'},
    {text: 'Instagram', href:'https://www.instagram.com/powderhs/'},
    {text: 'YouTube', href:'https://www.youtube.com/channel/UCtTU6mxTNn0GxbxnzT3zrEQ'},
];
socialMediaLinks.forEach(l => l.id = l.text.toLowerCase() + '-' + 'social')

export { navMenuItems, socialMediaLinks }