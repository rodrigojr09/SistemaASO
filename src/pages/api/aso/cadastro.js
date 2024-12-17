export function handle(req, res) {
	if (req.method !== "POST") {
		return res.status(401).send("Metodo invalido!");
	}

	const body = req.body;

	res.status(201).send("ok!");
}
