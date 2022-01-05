//POST /api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, adress, description } = data;
  }
};

export default handler;