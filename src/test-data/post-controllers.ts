import { RequestInfo } from "angular-in-memory-web-api/interfaces";
import { data } from './initial-data';

export const postControllers = {
    login: (reqInfo: RequestInfo) => reqInfo.utils.createResponse$(() => {
        const { headers, url, req } = reqInfo

        const response = { 
            status: 401, 
            headers, 
            url, 
            body: { } 
          }

        const {username, password} = req['body']

        const { displayName } = data.users.find(u => u.username === username && u.password === password)

        if(displayName) {
            response.status = 200
            response.body = {username, displayName}
        }
        
        return response
    })
}