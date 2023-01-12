import {
  CHANGE_CHARGE_MENU_SELECTOR,
  CHARGER_INPUT_SELECTOR,
  COIN_AMOUNT_SELECTOR,
  COIN_CHARGING_FORM_SELECTOR,
  COIN_INVENTORY_SELECTOR,
  COIN_STANDARD_SELECTOR,
  HOLDING_AMOUNT_SELECTOR,
} from "../support/selectors.js";

describe("잔돈 충전 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(CHANGE_CHARGE_MENU_SELECTOR).click();
  });

  context("잔돈 충전을 할 수 있다.", () => {
    it("잔돈 충전 입력 폼이 보인다", () => {
      cy.get(COIN_CHARGING_FORM_SELECTOR).should("exist");
    });

    it("잔돈을 입력할 수 있는 Input이 존재한다.", () => {
      cy.get(CHARGER_INPUT_SELECTOR).should("exist");
    });

    it("최초 보유한 금액은 0원이다", () => {
      cy.get(HOLDING_AMOUNT_SELECTOR).should("have.text", "0");
    });

    it("100원부터 충전이 가능하며 잘못 입력시 alert가 뜬다", () => {});

    it("잔돈은 10원 단위로 충전이 가능하다", () => {});

    it("잔돈 입력 후 Enter키를 눌러서 충전할 수 있다", () => {});

    it("잔돈 입력후 충전하기 버튼을 눌러서 충전할 수 있다", () => {});

    it("자판기가 보유한 금액을 확인할 수 있다", () => {});

    it("잔돈은 누적하여 충전할 수 있다", () => {});
  });

  context("보유한 동전을 갯수를 확인할 수 있다.", () => {
    it("잔돈 현황을 확인할 수 있는 테이블이 보인다", () => {
      cy.get(COIN_INVENTORY_SELECTOR).should("exist");
    });

    it("최초 보유한 동전의 갯수는 각각 0개이다", () => {
      cy.get(COIN_AMOUNT_SELECTOR).each((amount) => {
        expect(amount).text("0");
      });
    });

    it("500원, 100원, 50원, 10원 단위에 따른 동전의 갯수로 표시된다", () => {
      const coinStandard = ["500", "100", "50", "10"];
      cy.get(COIN_STANDARD_SELECTOR).each((standard, index) => {
        expect(standard).text(coinStandard[index]);
      });
    });

    it("보유한 동전은 X개 형식으로 확인할 수 있다", () => {});
  });

  it("다른 메뉴로 이동 후 다시 돌아왔을 경우 값은 유지된다.", () => {});
});