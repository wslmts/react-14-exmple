var seaConfig = {
    'base':"../basic-click-counter/",
    'alias':{
        'jquery' : 'lib/react/jquery.js',
        'react':'lib/react/react.js',
        'react-dom':'lib/react/react-dom.js'
    }
};
seajs.config(seaConfig);
seajs.use("./js/entry.js");
