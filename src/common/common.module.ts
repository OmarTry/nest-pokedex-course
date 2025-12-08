import { Module } from '@nestjs/common';
import { Adapter } from './adapters/http-request.adapter';

@Module({
    providers: [ Adapter ],
    exports: [Adapter]
})
export class CommonModule {}
