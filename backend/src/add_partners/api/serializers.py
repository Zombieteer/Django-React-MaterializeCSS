from rest_framework import serializers
from add_partners.models import Partner


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ('id',
                  'partner_image',
                  'partner_first_name',
                  'partner_second_name',
                  'mobile',
                  'full_address',
                  'city',
                  'emergency_number',
                  'salary',
                  'licsence_number',
                  'expiry_date',
                  'availability_status')
