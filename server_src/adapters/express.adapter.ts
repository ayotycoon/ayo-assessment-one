
/** 
 * This file ensure a common point of entrance and exit for all requests
 * 
 * 
 */


export default (controller, key) => {
  return (req, res) => {

    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ipInfo: req.ipInfo,
      files: req.files,
      file: req.file,
      method: req.method,
      path: req.path,
      user: req.user,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
    };
    // initialize the controller class with the desired key
    new controller(key, httpRequest)
      .then((httpResponse) => {

        // if execution is successful, snd back response
        res.type("json");
        res.status(201)
        .send(httpResponse);

      })
      .catch((e) => {
        // if error send error back
        console.log(e)
        let message = e.message || e


        res.status(e.status || 400).send({ error: message });
      });
  };
};
