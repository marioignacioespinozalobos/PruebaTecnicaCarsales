namespace PruebaTecnicaCarsalesServer.Models
{
    public class CollectionGeneric<T> : Base
    {
        public Info? Info { get; set; }
        public T? Results { get; set; }
    }
}
