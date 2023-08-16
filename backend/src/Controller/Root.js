async function RootRouter(req,res) {
    try {
        res.status(200).json("<h1>Products Back-end</h1>");
      } catch (error) {
        res.status(500).json(error);
      }
}

module.exports =  {RootRouter};