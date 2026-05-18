import { Random } from "random";

type Hand = 0 | 5;

interface Hands
{
	left: Hand;
	right: Hand;
}

interface OpponentChoices extends Hands
{
	guess: number;
}

const headers = new Headers(
	{
		"Cache-Control": "no-store",
		"CDN-Cache-Control": "max-age=1",
	});

const random = new Random(Date.now());

function randomHands(): Hands
{
	return {
		left: random.boolean() ? 5 : 0,
		right: random.boolean() ? 5 : 0,
	};
}

export default
{
	async fetch(request, env, ctx): Promise<Response>
	{
		const hands = randomHands();
		const playerHands = randomHands();

		const choices: OpponentChoices = {
			...hands,
			guess: hands.left + hands.right + playerHands.left + playerHands.right,
		};

		return Response.json(choices, { headers });
	},
} satisfies ExportedHandler<Env>;
