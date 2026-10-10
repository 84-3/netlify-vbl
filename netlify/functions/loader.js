export default async () => {
    return new Response(
        'loadstring(game:HttpGet("https://dareivbl.vercel.app/loader"))()',
        {
            status: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8"
            }
        }
    );
};
