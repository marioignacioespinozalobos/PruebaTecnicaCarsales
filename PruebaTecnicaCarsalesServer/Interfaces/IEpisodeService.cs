using System.Threading.Tasks;
using PruebaTecnicaCarsalesServer.Models;

namespace PruebaTecnicaCarsalesServer.Interfaces
{
    public interface IEpisodeService
    {
        Task<CollectionGeneric<ICollection<Episode>>> GetEpisodeAll();


        Task<CollectionGeneric<ICollection<Episode>>> GetUrlPagina(string pag);

    }
}
