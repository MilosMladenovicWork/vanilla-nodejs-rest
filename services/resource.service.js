const {
  resourceValidationError,
} = require("../errors/resource-validation.error");
const { notFoundError } = require("../errors/not-found.error");

const getResources = (req) => {
  const resourceValues = req.resourceValues;

  return resourceValues;
};

const createResource = (req, res) => {
  const resourceValues = req.resourceValues;

  if (typeof req.body.resourceValue !== "number") {
    return resourceValidationError(res);
  }

  const value = req.body.resourceValue;

  resourceValues.push(value);

  return value;
};

const updateResource = (req, res) => {
  const resourceValues = req.resourceValues;

  if (typeof req.body.oldResourceValue !== "number") {
    return resourceValidationError(res);
  }

  if (typeof req.body.resourceValue !== "number") {
    return resourceValidationError(res);
  }

  const indexOfExistingValue = resourceValues.indexOf(
    req.body.oldResourceValue
  );

  if (indexOfExistingValue === -1) {
    return notFoundError(res);
  }

  resourceValues[indexOfExistingValue] = req.body.resourceValue;

  return resourceValues;
};

const deleteResource = (req, res) => {
    const resourceValues = req.resourceValues;

    if(resourceValues.length === 0){
        return notFoundError(res)
    }

    resourceValues.pop()
}

module.exports = { getResources, createResource, updateResource, deleteResource };
