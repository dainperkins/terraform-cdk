type Assertions = (hclJson: Record<string, any>) => void;
type Action = { ts: () => string };
type ProviderRequirement = string;
type ResourceNames = string[];

const providerToGenerate = {
  "terraform-providers/docker@~> 2.0": ["docker.DockerContanier"],
};

let generatedProvidersPath: Promise<string> | undefined;
function getGeneratedProvidersPath(
  providers: Record<ProviderRequirement, ResourceNames> = providerToGenerate
) {
  if (generatedProvidersPath) return generatedProvidersPath;
  // Create a project
  // run readSchema
  // filter schema
  // generate code for schema
  // return path to generated providers
}

function createAndSynthProject(name: string, constructDefinitions: string) {
  // Create Dir
  // Copy over generated providers
  // Copy over template files
  // Set Construct definitions in the package
  // Synth
  return name; // Return synthed output instead
}

export function testcase(name: string, action: Action, assertion: Assertions) {
  describe(name, () => {
    Object.entries(action).forEach(([k, v]) => {
      const testName = `${name} (${k})`;

      it(testName, () => {
        const constructDefinitions = v();
        const hclJson = createAndSynthProject(testName, constructDefinitions);
        assertion(JSON.parse(hclJson));
      });
    });
  });
}

export function itemAt(
  synthOutput: Record<string, any>,
  resourceAddress: string,
  itemName: string,
  propertyAddress: string
) {}

export function regexForReference(
  resourceType: string,
  resourceName: string,
  property: string
): RegExp {
  // Regex should match ${resourceType.foo_resourceName_bar.property}
  return new RegExp(`\\$\\{${resourceType}.*_${resourceName}_*.${property}\\}`);
}
