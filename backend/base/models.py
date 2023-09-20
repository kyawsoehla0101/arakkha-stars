from django.db import models
from django.utils.crypto import get_random_string
from django.utils.text import slugify




def unique_slugify(instance, slug):
        model = instance.__class__
        unique_slug = slug
        while model.objects.filter(slug=unique_slug):
            unique_slug = slug + get_random_string(length=4)
        return unique_slug
    
    
# start category
class Category(models.Model):
    category_name = models.CharField(max_length=255,blank=True,null=True)
    slug = models.SlugField(unique=True,null=True,default=None,editable=False)

    
    def save(self, *args, **kwargs):
        if not self.slug: # If the slug is not set
            self.slug = unique_slugify(self,slugify(self.category_name,allow_unicode=True)) # Generate the slug from the title
        else:
            new_slug = unique_slugify(self,slugify(self.category_name,allow_unicode=True))
            if self.slug != new_slug: # Check if the title has changed
                self.slug = new_slug # Update the slug with the new value
        super().save(*args, **kwargs) # Call the parent save method
    
    def __str__(self):
        return self.category_name

# end category
    
    
# Start a New Post Model 
class Post(models.Model):
    name = models.CharField(max_length=255,blank=True,null=True)
    slug = models.SlugField(max_length=30,unique=True,null=True,blank=True,editable=False)
    decsription = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='post-images/',null=True, blank=True)
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True,default="general")
    is_featured = models.BooleanField(blank=True) 
    # user = models.ForeignKey(User, on_delete=models.CASCADE,blank=True,null=True)
    views=models.IntegerField(default=0,null=True,blank=True)
    create_date = models.DateField(null=True, blank=True, auto_now_add=True)
    update_date = models.DateField(null=True, blank=True, auto_now=True)
    
    class Meta:
        ordering=['-create_date']
        
    def save(self, *args, **kwargs):
        if not self.slug: # If the slug is not set
            self.slug = unique_slugify(self,slugify(self.name,allow_unicode=True)) # Generate the slug from the title
        else:
            new_slug = unique_slugify(self,slugify(self.name,allow_unicode=True))
            if self.slug != new_slug: # Check if the title has changed
                self.slug = new_slug # Update the slug with the new value
        super().save(*args, **kwargs) # Call the parent save method
    
    def __str__(self):
        return f"Your Post Name is {self.name}"
    
        
    @property
    def imageurl(self):
        try:
            url = self.image.url
        except:
            url =""
        return url
# end a New Post Model 
