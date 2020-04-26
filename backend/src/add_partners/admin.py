from django.contrib import admin

from .models import Partner


class PartnerAdmin (admin.ModelAdmin):
    list_display = ('id',
                    #   'partner_image',
                    'partner_first_name',
                    'partner_second_name',
                    'mobile',
                    #   'full_address',
                    'city',
                    'emergency_number',
                    #   'salary',
                    'licsence_number',
                    #   'expiry_date',
                    'availability_status')

    list_display_links = ('id', 'partner_first_name')
    list_filter = ('city', 'availability_status')
    search_fields = ('id', 'partner_first_name', 'city')
    list_per_page = 25


admin.site.register(Partner, PartnerAdmin)
