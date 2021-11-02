from django.urls import path
from api import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [
    path('notes/', views.getNotes, name='notes'),
    path('contact/', views.contactApi.as_view(), name='contact'),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('create-user/', views.createNewUser.as_view(), name='create_user'),
]



