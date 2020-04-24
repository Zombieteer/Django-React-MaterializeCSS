from rest_framework.generics import ListAPIView, RetrieveAPIView

from add_partners.models import Partner
from .serializers import PartnerSerializer


class PartnerListView(ListAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer


class PartnerDetailView(RetrieveAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
