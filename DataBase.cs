using MongoDB.Driver;
using ReactDemo.Models;

namespace React.Sample.Webpack.CoreMvc
{
    public class DataBase
    {
        private readonly IMongoDatabase database;
        private readonly MongoClient client;
           
        public DataBase()
        {
            const string uri = "mongodb+srv://admin:admin@cluster0-61dfa.mongodb.net/test?retryWrites=true";
            client = new MongoClient(uri);
            database = client.GetDatabase("db");
        }

        public IMongoCollection<CarModel> GetCollection(string name)
        {
            return database.GetCollection<CarModel>(name);
        }
    }
}