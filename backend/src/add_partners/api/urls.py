from rest_framework.routers import DefaultRouter
from add_partners.api.views import PartnerViewSet


router = DefaultRouter()
router.register(r'', PartnerViewSet, basename='partners')
urlpatterns = router.urls

# from django.urls import path

# from .views import (
#     PartnerListView,
#     PartnerDetailView,
#     PartnerCreateView,
#     PartnerDeleteView)


# urlpatterns = [
#     path('', PartnerListView.as_view()),
#     path('create/', PartnerCreateView.as_view()),
#     path('<pk>', PartnerDetailView.as_view()),
#     path('<pk>/delete/', PartnerDeleteView.as_view()),
# ]
