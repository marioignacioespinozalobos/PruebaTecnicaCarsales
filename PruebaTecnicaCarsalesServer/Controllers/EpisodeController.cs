using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaCarsalesServer.Service;
using PruebaTecnicaCarsalesServer.Interfaces;

namespace PruebaTecnicaCarsalesServer.Controllers
{
    [ApiController]
    [Route("Episode")]
    public class EpisodeController : ControllerBase
    {
        private readonly IEpisodeService _service;

        public EpisodeController(IEpisodeService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("GetEpisodeAll")]
        public async Task<IActionResult> GetEpisodeAll()
        {
            try
            {
                var response = await _service.GetEpisodeAll();
                return response.Success ? Ok(response) : NoContent();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpGet]
        [Route("GetUrlPagina")]
        public async Task<IActionResult> GetUrlPagina(string pag)
        {
            try
            {
                var response = await _service.GetUrlPagina(pag);
                return response.Success ? Ok(response) : NoContent();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }
    }
}
