import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VehicleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Vehicle {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vehicle, VehicleMetaData>);
  static copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle, VehicleMetaData>) => MutableModel<Vehicle, VehicleMetaData> | void): Vehicle;
}