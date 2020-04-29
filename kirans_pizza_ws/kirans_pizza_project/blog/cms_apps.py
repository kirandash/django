from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool

@apphook_pool.register
class BlogApp(CMSApp):
    app_name = "blog"  # must match the application namespace
    name = "Blog"

    def get_urls(self, page=None, language=None, **kwargs):
        return ["blog.urls"] # replace this with the path to your application's URLs module