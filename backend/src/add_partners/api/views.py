from rest_framework import viewsets
from add_partners.models import Partner
from .serializers import PartnerSerializer


class PartnerViewSet(viewsets.ModelViewSet):
    serializer_class = PartnerSerializer
    queryset = Partner.objects.all()


# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView)

# class PartnerListView(ListAPIView):
#     queryset = Partner.objects.all()
#     serializer_class = PartnerSerializer


# class PartnerDetailView(RetrieveAPIView):
#     queryset = Partner.objects.all()
#     serializer_class = PartnerSerializer


# class PartnerCreateView(CreateAPIView):
#     queryset = Partner.objects.all()
#     serializer_class = PartnerSerializer


# class PartnerDeleteView(DestroyAPIView):
#     queryset = Partner.objects.all()
#     serializer_class = PartnerSerializer
