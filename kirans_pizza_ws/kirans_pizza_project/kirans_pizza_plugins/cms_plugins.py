from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from .models import *

class Daily_Specials_Plugin(CMSPluginBase):
    model = Daily_Specials # Using the Daily_Special model which we created in models.py file
    name = "Daily Specials" # User friendly name to show in admin
    render_template = "daily_special.html" # Template to which the plugin will render

    def render(self, context, instance, placeholder):
        context.update({
            'name': instance.name,
            'image': instance.image,
            'description': instance.description,
            'url': instance.url
        }) # typing instance of plugin with template
        return context

# Registering our plugin
plugin_pool.register_plugin(Daily_Specials_Plugin)