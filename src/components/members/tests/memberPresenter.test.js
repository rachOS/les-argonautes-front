import { setMembersDatas, normalize } from "../presenter/memberPresenter";
import { getMembers } from "../actions/memberActions";
describe("how to dispatch members into groups", () => {
  const argonauts = [
    { id: 1, name: "Jason" },
    { id: 105, name: "Gennadios" },
    { id: 305, name: "Charampoulos" },
    { id: 315, name: "Augias" },
    { id: 325, name: "Pénéléos" },
    { id: 345, name: "Pollux" },
    { id: 355, name: "Héraclès" },
    { id: 365, name: "Astérios" },
  ];
  it("must a list of Argonauts", (done) => {
    expect(normalize(argonauts).length).toBeGreaterThanOrEqual(1);
    done();
  });

  it("must have a group", (done) => {
    const expectedGroup = [1, 2, 3];
    normalize(argonauts).map((argonaut) => {
      expect(argonaut.group).toBeGreaterThanOrEqual(1);
      expect(argonaut.group).toBeLessThanOrEqual(3);
      expect(expectedGroup).toContain(argonaut.group);
      expect(Object.keys(argonaut)).toContain("group");
    });
    done();
  });
  it("must have at least 3 differents groups", (done) => {
    const groups = [1, 2, 3];
    normalize(argonauts).map((argonaut) => {
      expect(groups.some((group) => group === argonaut.group)).toBeTruthy();
    });

    done();
  });
});
