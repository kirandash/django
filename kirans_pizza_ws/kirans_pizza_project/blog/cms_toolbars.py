from cms.toolbar_base import CMSToolbar
from cms.toolbar_pool import toolbar_pool
from cms.toolbar.items import Break, SubMenu

@toolbar_pool.register
class PostToolbar(CMSToolbar):

    def populate(self):
        admin_menu = self.toolbar.get_or_create_menu("blog-menu", "Blog") # creating a blog menu in our toolbar

        position = admin_menu.get_alphabetical_insert_position("Posts", SubMenu) # To the blog menu, we are adding a Posts submenu

        post_menu = admin_menu.get_or_create_menu("post-menu", "Posts", position=position)
        url = "/admin/blog/post" # url where this menu item will take us
        post_menu.add_modal_item("Edit Posts", url=url) # Posts submenu will take us to the Edit posts section of Django Admin

        url = "/admin/blog/post/add" # url for adding a new post
        post_menu.add_modal_item("Add New Post", url=url)

        post_menu.add_break() # Adding a Break so that we can add another submenu afterwards


@toolbar_pool.register
class CategoryToolbar(CMSToolbar):

    def populate(self):
        admin_menu = self.toolbar.get_or_create_menu("blog-menu", "Blog") # creating a blog menu in our toolbar

        position = admin_menu.get_alphabetical_insert_position("Categories", SubMenu) # To the blog menu, we are adding a Categories submenu

        category_menu = admin_menu.get_or_create_menu("category-menu", "Categories", position=position)
        url = "/admin/blog/category" # url where this menu item will take us
        category_menu.add_modal_item("Edit Categories", url=url) # Categories submenu will take us to the Edit Categories section of Django Admin

        url = "/admin/blog/post/category" # url for adding a new category
        category_menu.add_modal_item("Add New Category", url=url)

        category_menu.add_break() # Adding a Break so that we can add another submenu afterwards
