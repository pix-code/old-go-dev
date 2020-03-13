export default {
  title: 'v0.2.0',
  entries: [
    {
      id: 6,
      isNew: false,
      isPublic: true,
      title: 'IMPORTANT NOTICE! Also New Aesthetics and Themes',
      author: 'Ryan King',
      tagline: 'LCHS Go now looks better and with more functionality. (Read below to see how you can support the LCHS iTeam)' ,
      content: [
        { type: 'text', text: 'ATTENTION: The "Grade Level" setting has been slightly reworked. Remember to make sure you are on the correct grade setting. ' },
        { type: 'text', text: '' },
        { type: 'text', text: 'Donate your old computer to the iTeam: If you wish to help the creators of the LCHS Go app, so that we can continue to make more updates to the website, you can! Our club only has access to a couple computers, which greatly limits our capability to make better changes to the app.'},
        { type: 'text', text: 'If you have an old computer (even if it does not work) that you do not use, we would be grateful if you could drop it by the Help Lab and inform whoever is there that it is a donation to iTeam. What might not be useful to you, could be a huge asset to our club!'},
        { type: 'text', text: ''},
        { type: 'text', text: 'The themes for LCHS Go now look much better, and include a bigger variety of options.'},
        { type: 'text', text: 'In addition, there is a new "Dynamic Theme", that will change color, depending on the time of day, it can be found in the theme select menu, under settings, like all the other themes.'},
      ],
    },
    {
      id: 7,
      isNew: true,
      isPublic: true,
      title: 'New Radial Themes',
      author: 'Ryan King',
      tagline: 'LCHS Go now has a fresh new theme option!' ,
      content: [
        { type: 'text', text: 'LCHS Go now has a new theme option that we\'ve dubbed "radial gradient"!'},
        { type: 'text', text: 'This new option works with any theme from our selection and can be activated by going to settings and toggling "Gradient Type" to "Radial".' },
        { type: 'text', text: 'As always, let us know what you think of this new theme option by emailing us.'},
        { type: 'call-to-action', text: 'Send an E-Mail!', url: 'mailto:team@lciteam.club' },
      ],
    },
    {
      id: 8,
      isPublic: true,
      isNew: true,
      title: 'Check out our chrome extension',
      author: 'Kai Bredemann',
      tagline: 'Easy access to the daily schedule without the hassle',
      content: [
        { type: 'text', text: 'Tired of going to go.lciteam.club? This extension will let you open LCHS Go in a small popout and see the time remaining of the current period at a quick glance. Download it here:' },
        { type: 'call-to-action', text: 'Get the Extension!', url: 'https://chrome.google.com/webstore/detail/lchs-go/cmmaleejnmjplfcnhojldkiejpndakad' },
        { type: 'image', url: require('../assets/lchsgo_screencap_meme.png') },
      ],
    },
  ],
};
