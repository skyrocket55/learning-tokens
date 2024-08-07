import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common'
import { CreateInstitutionDto } from './dto/create-institution.dto'
import { UpdateInstitutionDto } from './dto/update-institution.dto'
import { InstitutionsService } from './institutions.service'

@Controller('institutions')
export class InstitutionsController {
    constructor(private readonly institutionsService: InstitutionsService) {}

    @Post()
    create(@Body() createInstitutionDto: CreateInstitutionDto) {
        return this.institutionsService.create(createInstitutionDto)
    }

    @Get()
    findAll() {
        return this.institutionsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.institutionsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateInstitutionDto: UpdateInstitutionDto
    ) {
        return this.institutionsService.update(+id, updateInstitutionDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.institutionsService.remove(+id)
    }
}
// make new module for sdk keys
// together with test cases
