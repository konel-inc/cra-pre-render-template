// craco typescript config  
const CracoSwcPlugin = require('craco-swc');

export default {
    plugins: [
        {
            // Swc plugin
            plugin: CracoSwcPlugin 
        }
    ]
}
