define('AppServices', function () {
    /* jshint esnext: true */
    class Service {
        /* Integration Service calls*/
        callIntSvc(serviceId, operationId, params, headers, options = {}) {
            return new Promise(function (resolve, reject) {
                //sample of how to invoke the integration service operation
                /*
                    const operationSuccess = function (results) {
                        resolve(results);
                    };

                    const operationError = function (error) {
                        reject(error);
                    };

                    const integrationObj = KNYMobileFabric.getIntegrationService(serviceId);
                    params = params ? params : {};
                    headers = headers ? headers : {};
                    options = options ? options : {};

                    integrationObj.invokeOperation(operationId, headers, params, operationSuccess, operationError, options);
                    */

                // Instead, lets emulate a service call
                let response = null;
                switch (operationId){
                    case CONST.OP_GET_LIVE_SUMMARY: response = demo.liveSummaryPayload();
                        break;
                    case CONST.OP_GET_YEARLY_SUMMARY: response = demo.yearlySummaryPayload();
                        break;
                }
                kony.timer.schedule(kony.os.createUUID(), () => resolve(response), 1, false);
            });
        }
        
        /* Object Services calls*/
        getDataObject(objectName, query) {
            return new Promise(function (resolve, reject) {
                let options = {};
                options.whereCondition = query || {};
                
                //sample of how to invoke the get method of Offline Object API
                /*
                const object = new kony.sdk.KNYObj(objectName);
                object.get(options, response => resolve(response), error => reject(error));
                */
                
                // Instead, lets emulate an object GET call
                let response = null;
                switch (objectName){
                    case CONST.OBJ_SEO: response = demo.seoPayload(query); //assume that "query" contains the selected option
                        break;
                    case CONST.OBJ_COMPETITOR: response = demo.compPayload();
                        break;
                }
                kony.timer.schedule(kony.os.createUUID(), () => resolve(response), 1, false);
            });
        }
        
        createDataObject(objectName, record, options = {}) {
            return new Promise(function (resolve, reject) {
                const object = new kony.sdk.KNYObj(objectName);
                object.create(record, options, response => resolve(response), error => reject(error));
            });
        }
        
        
        updateDataObject(objectName, record, options) {
            return new Promise((resolve, reject) => {
                const object = new kony.sdk.KNYObj(objectName);
                object.update(record, options, response => resolve(response), error => reject(error));
            });
        }
        
        deleteDataObject(objectName, query) {
            return new Promise(function (resolve, reject) {
                const object = new kony.sdk.KNYObj(objectName);
                let options = {};
                if (query) {
                    options.whereCondition = query;
                }
                object.delete(options, response => resolve(response), error => reject(error));
            });
        }
        
        syncObject(objectName, options) {
            return new Promise((resolve, reject) => {
                var object = new kony.sdk.KNYObj(objectName);
                object.startSync(options, resolve, error => reject(error));
            });
        }
    }
    
    return new Service();
});