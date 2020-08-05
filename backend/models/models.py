class User():

    def __init__(self, dict):
        self.userID = dict['_id']
        self.firstName = dict['firstName']
        self.lastName = dict['lastName']
        self.email = dict['email']
        self.transactions = dict['transactions']
        self.activeSubs = dict['activeSubs']
    
    def get_UID(self):
        return self.userID
    def get_first_name(self):
        return self.firstName
    def get_last_name(self):
        return self.lastName
    def get_email(self):
        return self.email
    def list_transactions(self):
        return self.transactions
    def list_active_subs(self):
        return self.activeSubs