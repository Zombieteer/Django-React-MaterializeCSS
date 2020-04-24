from django.urls import path

from .views import PartnerListView, PartnerDetailView


urlpatterns = [
    path('', PartnerListView.as_view()),
    path('<pk>', PartnerDetailView.as_view())
]
