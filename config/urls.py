from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from anime.views import AnimeViewSet, CreatorViewSet, UserViewSet

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register('animes', AnimeViewSet)
router.register('creators', CreatorViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include('accounts.urls')),
    path('login/', TokenObtainPairView.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('refresh-token/', TokenRefreshView.as_view()),
    path('admin/', admin.site.urls),
]
