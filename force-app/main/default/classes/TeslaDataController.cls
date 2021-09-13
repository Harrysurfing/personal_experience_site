public without sharing class TeslaDataController {
    @AuraEnabled (cacheable = true)
    public static List<Tesla__c> getTeslas(){
        try {
            List<Tesla__c> teslas = [SELECT  Image__c, Name, Truck__c, Count__c
            FROM Tesla__c ORDER BY Id];
            return teslas;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled (cacheable = true)
    public static Tesla__c getTeslaRecord(String recordId){
        try {
            Tesla__c tesla = [SELECT Count__c, Acceleration_car__c, Cargo__c, Acceleration_truck__c, Image__c, Name, Truck__c, Top_Speed__c, Storage__c, Range_est__c
            FROM Tesla__c WHERE Id= :recordId];
            return tesla;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void updateCount(String recordId){
        try {
            Tesla__c tesla = [SELECT Count__c, Id
            FROM Tesla__c WHERE Id= :recordId];
            tesla.Count__c = tesla.Count__c + 1;
            update tesla;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }
}
