import isProduction from './services/env.service';

console.debug = (text) => {
    // only console when not in production
    if (!isProduction()) {
        console.log(text)
    }
}
import app, {server} from './config/express.config'




export default app;



