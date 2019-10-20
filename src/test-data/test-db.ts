import { InMemoryDbService } from 'angular-in-memory-web-api';
import {RequestInfo} from 'angular-in-memory-web-api/interfaces'
import { data } from './initial-data';
import { postControllers } from './post-controllers';

export class TestDB implements InMemoryDbService {
    createDb() {
        return data
    }

    post(req: RequestInfo) {
        const {collectionName} = req;

        if(postControllers[collectionName]) {
            return postControllers[collectionName](req)
        }

        return undefined
    }
}