export default async () => {
    return new Response(
        'loadstring(game:HttpGet("https://darei-vbl.up.railway.app/loader"))()',
        {
            status: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8"
            }
        }
    );
};
