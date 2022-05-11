
//Guardar en el cachñe dinámico
function actualizaCacheDinamico(dynamycCache, req, res){
    if (res.ok){
        return caches.open(dynamycCache).then( cache => {
            cache.put(req, res.clone());

            return res.clone();
        })
    }else{
        return res;
    }
}